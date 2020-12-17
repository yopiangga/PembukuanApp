$(function() {
  'use strict';

  $(function() {
    // $('#dataTable').DataTable({
    //   "aLengthMenu": [
    //     [10, 30, 50, -1],
    //     [10, 30, 50, "All"]
    //   ],
    //   "iDisplayLength": 10,
    //   "language": {
    //     search: ""
    //   }
    // });
    // $('#dataTable').each(function() {
    //   var datatable = $(this);
    //   // SEARCH - Add the placeholder for Search and Turn this into in-line form control
    //   var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
    //   search_input.attr('placeholder', 'Search');
    //   search_input.removeClass('form-control-sm');
    //   // LENGTH - Inline-Form control
    //   var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
    //   length_sel.removeClass('form-control-sm');
    // });

    $('#myTable').DataTable({
      dom: 'Bflrtip',
      rowReorder: {
        selector: 'td:nth-child(5)'
      },
      responsive: true,
      buttons: [
        'copy', 'excel', 'pdf', 'print'
      ]
    });


    $('#myTable').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });

    $('#myTable2').DataTable({
      dom: 'Bflrtip',
      rowReorder: {
        selector: 'td:nth-child(5)'
      },
      responsive: true,
      buttons: [
        'copy', 'excel', 'pdf', 'print'
      ]
    });


    $('#myTable2').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });

    $('#myTable3').DataTable({
      dom: 'Bflrtip',
      rowReorder: {
        selector: 'td:nth-child(5)'
      },
      responsive: true,
      buttons: [
        'copy', 'excel', 'pdf', 'print'
      ]
    });


    $('#myTable3').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });

  });

});