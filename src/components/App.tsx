import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { baseTheme } from "../theme/theme";
import LoginForm from "./loginForm/LoginForm";
import { store } from "../store/store";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={baseTheme}>
				<LoginForm />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
