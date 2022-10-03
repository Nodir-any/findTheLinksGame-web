const links = document.querySelector('button');
const invisible = document.querySelector('.invisible');

links.addEventListener('click', function(){
	swal({
		title: "Success",
		text: "Congratulations, you found it",
		icon: "success",
	})
})