import type { ColumnDef } from "@tanstack/react-table";
import type { BrandDTO } from "../../dtos/brand.dto";

export const BrandColumns: ColumnDef<BrandDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },

    {
        accessorKey: 'name',
        header: 'Nome da Brand'
    }
];