const atomicGenerator =
          require("@a9g/plop-generator-react-atomic-component").default;

const defaultConfig = {
    createIndex: true,
    functional: true,
    basePath: "src/ui/components",
    withClassnameInterfaceImportPath: "@Framework/ui", //make sure to configure this path
    withStyleInterfaceImportPath: "@Framework/ui",
    tests: true,
    stories: true,
    styledComponents: true,
    useNative: false,
    useMacro: false
};

const config = plop => {
    atomicGenerator(plop, defaultConfig);
};

module.exports = config;
