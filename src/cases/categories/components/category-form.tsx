import { SideBarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/use-category";


export function CategoryForm() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useCategory(id ?? '');

    function handleSave() {

    }

    return (
        <SideBarForm
            title="Cadastro de Categoria"
            onSave={handleSave}>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (<p>{JSON.stringify(data)}</p>)}
        </SideBarForm>
    )
}