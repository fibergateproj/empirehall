import jQuery from 'jquery';

export default () => {
  (function quantity($) {
    $.fn.numberPicker = function qunt() {
      const dis = 'disabled';

      return this.each(function fn2() {
        const picker = $(this);
        const  p = picker.find('button:last-child');
        const  m = picker.find('button:first-child');
        const  input = picker.find('input');
        const  min = parseInt(input.attr('min'), 10);
        const  max = parseInt(input.attr('max'), 10);

        const  inputFunc = function fn3(picker) {
          const i = parseInt(input.val(), 10);
          if ((i <= min) || (!i)) {
            input.val(min);
            // p.prop(dis, false);
            // m.prop(dis, true);
          } else if (i >= max) {
            input.val(max);
            // p.prop(dis, true);
            // m.prop(dis, false);
          } else {
            // p.prop(dis, false);
            // m.prop(dis, false);
          }
        };

        const changeFunc = function changeFn(picker, qty) {
          let q = parseInt(qty, 10);
          let  i = parseInt(input.val(), 10);
          if ((i < max && (q > 0)) || (i > min && !(q > 0))) {
            input.val(i + q);
            inputFunc(picker);
          }
        };
        m.off('click');
        p.off('click');
        m.on('click', () => {
          changeFunc(picker, -1);
        });
        p.on('click', () => {
          changeFunc(picker, 1);
        });
        input.on('change', () => {
          inputFunc(picker);
        });
        inputFunc(picker);

      });
    };
  }(jQuery));

  $('.product-quantity').numberPicker();
}
