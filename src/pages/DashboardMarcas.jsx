// import "primereact/resources/themes/lara-light-pink/theme.css";
import { styled } from "styled-components";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useForm } from "react-hook-form";
import { useGetMarcas } from "../hooks/marcaHooks";

const DashboardMarcasContainer = styled.div`

`;

const DashboardMarcas = () => {
    const [customers, setCustomers] = useState([]);
    const [visibleCreate, setVisibleCreate] = useState(false);
    const { register: registerCreate, handleSubmit: handleCreate } = useForm();
    const { register: registerUpdate, handleSubmit: handleUpdate } = useForm();

    const { data: listarMarcas } = useGetMarcas();
    console.log(listarMarcas);

    function criar(dados) {

    }
    return (
        <DashboardMarcasContainer>
            <h3 className="flex justify-between align-middle text-4xl text-black mb-4">
                Marcas
                <button
                    className="border-rounded-md bg-primary-1 p-2 rounded-md text-white text-sm"
                    onClick={() => setVisibleCreate(true)}
                >
                    nova marca
                </button>
            </h3>
            <DataTable
                value={listarMarcas}
                stripedRows
                paginator
                emptyMessage={() => (
                    <div style={{ textAlign: 'center' }}>{'Nenhuma informação encontrada'}</div>
                )}
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="marca_id" header="ID"></Column>
                <Column field="marca_nome" header="Nome"></Column>
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position="right"
                header={"Criar"}
            >
                <form onSubmit={handleCreate(criar)}>
                    <label htmlFor="">Nome</label>
                    <input
                        type="text"
                        placeholder="Nome da marca"
                        {...registerCreate('marca_nome', { required: true })}
                    />
                    <button>Criar</button>
                </form>
            </Sidebar>
        </DashboardMarcasContainer>
    );
}

export default DashboardMarcas;