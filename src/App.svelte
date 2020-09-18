<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  console.log("CLIENT NODE_ENV:", process.env.NODE_ENV);
</script>

<style  global>
  @import "../static/global.css";
</style>

<Router {routes} />
