import { Outlet } from "react-router-dom";
import ListItens from "../../../components/ListItens";
import './style.css';

export default function Products(){
    return(
        <div className="rr-container-itens">
            <ListItens />
            <div className="rr-subproduct">
                <Outlet />
            </div>
        </div>
    );
}