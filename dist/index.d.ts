declare const urlProcess: () => {
    addURLParam: (url: string, name: string, value: string) => string;
};
export default urlProcess;
