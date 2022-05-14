/**initial index pointing to initial myStack */
// import MyStack from "./MyStack";

// export default function main(app) {
//   // Set default runtime for all functions
//   app.setDefaultFunctionProps({
//     runtime: "nodejs14.x"
//   });

//   new MyStack(app, "my-stack");

//   // Add more stacks
// }

/** first change */

// import StorageStack from "./StorageStack";¸

// export default function main(app) {
//   new StorageStack(app, "storage");
// }

/**second change */
// import ApiStack from "./ApiStack";
// import StorageStack from "./StorageStack";
// export default function main(app) {
//   const storageStack = new StorageStack(app, "storage");

//   new ApiStack(app, "api", {
//     table: storageStack.table,
//   });
// }

/**third change */

// import ApiStack from "./ApiStack";
// import StorageStack from "./StorageStack";
// import AuthStack from "./AuthStack";

// export default function main(app) {
//   const storageStack = new StorageStack(app, "storage");

//   const apiStack = new ApiStack(app, "api", {
//     table: storageStack.table,
//   });

//   new AuthStack(app, "auth", {
//     api: apiStack.api,
//     bucket: storageStack.bucket,
//   });
// }

/** with frontend */

import FrontendStack from "./FrontendStack";
import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";
import AuthStack from "./AuthStack";

export default function main(app) {
  const storageStack = new StorageStack(app, "storage");

  const apiStack = new ApiStack(app, "api", {
    table: storageStack.table,
  });

  const authStack = new AuthStack(app, "auth", {
    api: apiStack.api,
    bucket: storageStack.bucket,
  });

  new FrontendStack(app, "frontend", {
    api: apiStack.api,
    auth: authStack.auth,
    bucket: storageStack.bucket,
  });
}