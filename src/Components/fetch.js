const postData = {
    title: title,
    description: description,
    };




    
    try {
    const response = await fetch('/example.com/data', {
    method: "put",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
    });
    if (!response.ok) {
    const message = 'Error with Status Code: ' + response.status;
    throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    } catch (error) {
    console.log('Error: ' + err);
    }
     