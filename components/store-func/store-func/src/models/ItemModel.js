class ItemModel {
    constructor(entity) {
        Object.assign(this, {
            brand: ''    ,
            title: '',
            description: '',
            descriptionFull: '',
            price: '',
            currency: ''
        }, entity)
    }
    
}

export default ItemModel;