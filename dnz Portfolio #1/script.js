function downloadimagebydnz() {
    var imageUrl = 'assets/DNZ_CV.pdf';
    var link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'assets/DNZ_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}