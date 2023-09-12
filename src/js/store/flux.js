const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Daniela_Agenda")
					if (response.status != 200) {
						console.log("Error en la solicitud. Code: ", response.status)
					}
					const body = await response.json()
					setStore({ agenda: body});
				} catch (error) {
					console.log(error);
				}
			},
		}
	};
};

export default getState;
