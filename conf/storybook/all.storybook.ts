export const loadStories: any = () => {
    const req: any = require.context('../../packages', true, /\.stories\.ts$/);
    req.keys().forEach(filename => req(filename));
};
