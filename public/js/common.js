jQuery.ajaxSetup({async:false});

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  firebase.auth().signOut();
}

jQuery.fn.extend({
  fill: function(target, data, attr) {
    if (data && target) {
      var element = this.find('[data-fill="' + target + '"]');
      if (attr) {
        element.attr(attr, data);
      } else {
        element.html(data);
      }
    }
  }
});

function create(filename) {
  var div =$('<div></div>');
  div.load(filename);
  return div;
}
