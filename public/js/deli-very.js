/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#sendit',
  data: {
    orders: {},
    lastOrderId: 0
  },
  methods: {
    getNext: function () {
      this.lastOrderId += 1;
      return this.lastOrderId;
    },
    displayOrder: function(event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      var coordinates = { x: event.clientX - 10 - offset.x,
                          y: event.clientY - 10 - offset.y };
      this.orders = coordinates;
    },
    addOrder: function (event) {
      socket.emit("addOrder", {orderId: this.getNext(),
                              details: this.orders,
                              orderItems: ordered(),
                              personalInfo: contact(),
                          });
        done();
      }
    }
  });
