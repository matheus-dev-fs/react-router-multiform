import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormStep1 } from "./pages/form-step-1/form-step-1.component";
import { FormStep2 } from "./pages/form-step-2/form-step-2.component";
import { FormStep3 } from "./pages/form-step-3/form-step-3.component";
import { FormStep4 } from "./pages/form-step-4/form-step-4.component";

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1 />} />
                <Route path="/step-2" element={<FormStep2 />} />
                <Route path="/step-3" element={<FormStep3 />} />
                <Route path="/step-4" element={<FormStep4 />} />
            </Routes>
        </BrowserRouter>
    );
};