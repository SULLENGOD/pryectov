const crearUsuarioApi = async (createUser) => {
    let response = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(createUser),
    });
    return response;
  };

export { crearUsuarioApi }