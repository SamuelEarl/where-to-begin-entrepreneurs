<template>
  <h1>Click these buttons to test the API calls</h1>
  <Button on:click={handlePayload}>Test Payload</Button>
  &nbsp;
  <Button on:click={handleParams}>Test Params</Button>
</template>

<script>
  import Button from "@/components/Button.svelte";

  const handlePayload = async () => {
    try {
      const url = "PROXY_URL" + "/api/name";
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          firstName: "John",
          lastName: "Doe"
        })
      });

      let result = await response.json();
      console.log("TEST PAYLOAD RESULT:", result);
    }
    catch(err) {
      console.log("TEST PAYLOAD ERROR:", err);
    }
  };

  const handleParams = async () => {
    try {
      const firstName = "Jane";
      const lastName = "Doe";
      const name = `${firstName} ${lastName}`;

      const url = "PROXY_URL" + `/api/${name}`;
      let response = await fetch(url, {
        method: "GET"
      });

      let result = await response.json();
      console.log("TEST PARAMS RESULT:", result);
    }
    catch(err) {
      console.log("TEST PARAMS ERROR:", err);
    }
  };
</script>
