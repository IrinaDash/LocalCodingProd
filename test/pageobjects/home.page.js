import Page from './page';

class HomePage extends Page {

    get header1 () { return $('//h1')}
}
export default new HomePage();