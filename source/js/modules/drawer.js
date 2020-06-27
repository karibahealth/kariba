import menu from './menu';
import nav from './nav';

var drawer = {

    ready() {

        $('div.drawer__options ul li a').on('click', function() {

            menu.close();

            nav.anchor($(this).data('anchor'));

        });

    }

};

export default drawer;
