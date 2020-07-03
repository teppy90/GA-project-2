module.exports ={
    type: 'object',
    required: ['title','data'],
    properties: {
        title :{
            type: 'string'
        },
        data: {
            type: 'string'
        },
        _id: {
            type: 'string'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        }
    }
}

