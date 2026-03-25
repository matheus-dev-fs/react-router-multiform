import { type FC } from 'react';
import { Router } from './router.routes';
import { FormProvider } from './providers/form.provider.component';

const App: FC = () => {
    return (
        <FormProvider>
            <Router />
        </FormProvider>
    );
};

export default App;