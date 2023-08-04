import _ from "lodash";

export const paginatePlugin = async (collection, query, pipeline) => {
    if (query.page) {
        query.page = Number(query.page);
    }
    if (query.limit) {
        query.limit = Number(query.limit);
    }
    const indexs = await collection.indexInformation();
    const { page = 1, limit = 3, fields, sort, ...rest } = query;
    let _query = _.cloneDeep(rest);
    const skip = (page - 1) * limit;
    const totalProducts = await collection.count();
    const totalPages = Math.ceil(totalProducts / limit);
    const [sortBy = '_id', sortValue = 'desc'] = sort?.split('.') || [];
    const _pipeline = [
        {
            $match: _query
        },
        {
            $skip: skip
        },
        {
            $limit: limit
        }
    ];
    _pipeline.push({
        $sort: {
            [sortBy]: sortValue === 'asc' ? 1 : -1
        }
    });
    if (Object.keys(indexs).length > 1) {
        let key = Object.keys(indexs)[1].replace(/_text/g, '');
        if (_query[key]) {
            _query['$text'] = {
                $search: _query[key]
            };
            delete _query[key];
        }
    }
    if (pipeline) {
        _pipeline.unshift(...pipeline);
    }
    if (fields) {
        let arrFields = fields.split('.');
        let result = arrFields.reduce((initialValue, currentValue) => {
            initialValue[currentValue] = 1;
            return initialValue;
        }, {});
        _pipeline.push({
            $project: result
        });
    }
    const data = await collection.aggregate(_pipeline).toArray();
    return {
        data,
        paginate: {
            totalProducts,
            totalPages,
            currentPage: page
        }
    };
};
