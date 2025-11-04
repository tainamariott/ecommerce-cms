import type { ColumnDef } from "@tanstack/react-table";
import type { BrandDTO } from "../../dtos/brand.dto";
import { DataTableAction } from "@/components/layout/data-table-actions";

export const BrandColumns: ColumnDef<BrandDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },

    {
        accessorKey: 'name',
        header: 'Nome da Brand'
    },
        {
            accessorKey: 'actions',
            enableHiding: false, 
            cell: ({ row }) => {
                const brand= row.original;
    
                return(
                    <div className="flex justify-end mr-4">
                        <DataTableAction itemId={brand.id!}/>
                    </div>
                )
            }
        }
    ];