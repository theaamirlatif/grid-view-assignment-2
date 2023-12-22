<script>
function submitComment() {
  // Get the comment from the textarea
  var comment = document.getElementById("comment").value;

  // Display the submitted content on the page
  var submittedContent = document.getElementById("submitted-content");
  submittedContent.innerHTML = "<p>Submitted Comment:</p><p>" + comment + "</p>";

  // You can add additional logic for handling the comment submission (e.g., sending it to a server).
}
</script>