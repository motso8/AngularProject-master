export class Product {
    categoryId!: number
    id!: number
    image?: string
    name?: string
    nuts?: boolean = false
    vegetarian?: boolean = false
    price?: number
    spiciness?: number
}


// export class Product {
//     id!: number;
//     title?: string
//     description?: string
//     category?: string
//     price!: number
//     discountPercentage!: number
//     image?: string
//     rating!: number
//     stock!: number
//     tags?: string[]
//     brand?: string
//     sku?: string
//     weight!: number
//     dimensions?: Dimensions[]
//     warrantyInformation?: string
//     shippingInformation?: string
//     availabilityStatus?: string
//     reviews?: Reviews[]
//     returnPolicy?: string
//     minimumOrderQuantity!: number
//     meta?: Meta[] 
//     images?: string[]
//     thumbnail?: string

// }


// export class Dimensions {
//     width?: number
//     height?: number
//     depth?: number
// }

// export class Reviews {
//     rating?: number
//     comment?: string
//     date?: string
//     reviewerName?: string
//     reviewerEmail?: string
// }

// export class Meta {
//     createdAt?: string
//     updatedAt?: string
//     barcode?: string
//     qrCode?: string
// }