<template>
  <h1>Click these buttons to test the API calls</h1>

  <div>
    <Button on:click={handlePayload}>Test Payload</Button>
    &nbsp;
    <Button on:click={handleParams}>Test Params</Button>
  </div>

  <br><br>

  {#if firstNameRes && lastNameRes}
    <div>Test Payload Response: { firstNameRes } { lastNameRes }</div>
  {:else if nameRes}
    <div>Test Params Response: { nameRes } </div>
  {:else}
    <div>Waiting for test response...</div>
  {/if}
</template>

<script>
  import Button from "@/components/Button.svelte";

  let firstNameRes = "";
  let lastNameRes = "";
  let nameRes = "";

  const handlePayload = async () => {
    try {
      firstNameRes = "";
      lastNameRes = "";
      nameRes = "";

      const url = "PROXY_URL" + "/api/name";
      console.log("handlePayload:", url);
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          firstName: "John",
          lastName: "Doe"
        })
      });
      console.log("RESPONSE:", response);

      let result = await response.json();
      console.log("TEST PAYLOAD RESULT:", result);
      firstNameRes = result.body.firstName;
      lastNameRes = result.body.lastName;
    }
    catch(err) {
      console.log("TEST PAYLOAD ERROR:", err);
    }
  };

  const handleParams = async () => {
    try {
      firstNameRes = "";
      lastNameRes = "";
      nameRes = "";

      const firstName = "Jane";
      const lastName = "Doe";
      const name = `${firstName} ${lastName}`;

      const url = "PROXY_URL" + `/api/${name}`;
      let response = await fetch(url, {
        method: "GET"
      });

      let result = await response.json();
      console.log("TEST PARAMS RESULT:", result.query);
      nameRes = result.query.name;
    }
    catch(err) {
      console.log("TEST PARAMS ERROR:", err);
    }
  };
</script>
