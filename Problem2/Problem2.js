/**
 * Created by Chia-LinCatherine on 3/23/2016.
 * Derived from code written by pcannata on 2/27/16.
 */
"use strict";

var list = function() {
    var list = function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }

        var l = {
            length: 0,
            currentNode: null,
            head: new Node(null),
            add: function(e) {
                if (l.currentNode === null) {
                    l.head.data = e;
                    l.currentNode = new Node(null);
                    l.head.next = l.currentNode;
                    l.length++;
                }
                else {
                    l.currentNode.data = e;
                    var node = new Node(null);
                    l.currentNode.next = node;
                    l.currentNode = node;
                    l.length++;
                }
            },
        };

        var F = function () {
        };
        var f = new F();

        // public data
        f.run = function (e) {
            return l[e];
        };
        f.first = f.car = function () {
            return l.head.data
        }
        f.rest = f.cdr = function () {
            if(l.length > 0) {
                l.head = l.head.next;
                l.length--;
            }
            return this;
        }
        f.concat = f.cons = function(e){
            if (typeof e === 'string' || e instanceof String) {l.add(e);}
            else {
                var n = e.run('head')
                document.writeln(e.run('length'))
                for(var i = 0; i < e.run('length'); i++) {
                    l.add(n.data);
                    n = n.next;
                }
            }
        }

        f.length = function(){return l.length}

        f.map = function(func) {
            // Check if func is a function
            if (func instanceof Function) {
                var n = l.head;
                for (var i = 0; i < l.length; i++) {
                    n.data = func(n.data);
                    n = n.next;
                }
            }
        };

        f.iterator = function() {
            var iterNode = l.head;
            function getNext(){
                var currentData = iterNode.data;
                if (iterNode.next !== null) {
                    iterNode = iterNode.next;
                }
                else {
                    return "You have exhausted this iterator."
                }
                return currentData;

            };
            return getNext;
        };

        return f;
    }();
    return list;
};


var l1 = new list();

l1.cons('a');
l1.cons('b');
l1.cons('c');
l1.cons('d');
l1.cons('e');


var h = l1.run('head');
document.writeln("<br>l1: " + h.data);
for(var i = 1; i < l1.length(); i++) {
    h = h.next;
    document.writeln(", " + h.data);
}

var l2 = new list();
l2.cons('a');
l2.cons('b');
l2.cons('c');
l2.cons('d');
l2.cons('e');

var iter = l2.iterator();

document.writeln("<br>l2 iterator: " + iter());
document.writeln("<br>l2 iterator: " + iter());
document.writeln("<br>l2 iterator: " + iter());
document.writeln("<br>l2 iterator: " + iter());
document.writeln("<br>l2 iterator: " + iter());
document.writeln("<br>l2 iterator: " + iter());