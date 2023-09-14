import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(
        <div className="h-10">
            <div className="footerDetailer gap-x-2 gap-y-3 text-l pt-2">
                <p className="paragraphPosition">Developed by:</p>
                <a href="https://github.com/Vayre047" target="_blank" className="text-blue-950 socialLink">Tomás Borda de Água</a>
            </div>
        </div>
    );
}

export default Footer;