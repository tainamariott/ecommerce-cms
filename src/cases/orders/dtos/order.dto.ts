import type { CustomerDTO } from "@/cases/customers/dtos/customer";
import type { ProductDTO } from "@/cases/products/dtos/product.dto";

export interface OrdemItemDTO{
    id?: string; 
    product: ProductDTO;
    quantity: number;
    value: number;
}

export interface OrderDTO {
    id?: string; 
    costumer: CustomerDTO;
    status: string; 
    total: number;
    items: OrdemItemDTO[];
    createdAt: Date;
    updatedAt: Date;
}