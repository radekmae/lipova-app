import { AuthProvider } from "components/Session";
import { DatabaseProvider } from "admin/components/Database";

import "styles/globals.css";
import "styles/font/flaticon.css";

function App({ Component, pageProps }) {
    return (
        <DatabaseProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </DatabaseProvider>
    );
}

export default App;
