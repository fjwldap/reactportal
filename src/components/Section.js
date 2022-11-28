import { ContMgtList, ContMgtView, MainPage } from "../routes";
import { Route, Routes } from 'react-router-dom';

function Section(props) {

    return (
        <section>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contmgtlist" element={<ContMgtList />} />
                <Route path="/contmgtview" element={<ContMgtView />} />
            </Routes>
        </section>
    );

}

export default Section;