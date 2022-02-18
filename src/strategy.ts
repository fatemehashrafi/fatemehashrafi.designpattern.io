interface TextFileSaver {
    save(path: string, str: string): boolean;
}
class PDFTextFileSaver implements TextFileSaver {
    save(path: string, str: string): boolean {
        return true;
    }
}
class WordTextFileSaver implements TextFileSaver {
    save(path: string, str: string): boolean {
        return true;
    }
} 
class File implements TextFileSaver {
    constructor(private saver: TextFileSaver) {

    }
    save(path: string, str: string): boolean {
        return this.saver.save(path, str);
    }

}
 export function Strategy(){
 const pdfFile = new File(new PDFTextFileSaver());
 pdfFile.save('path','here');
 
 const wordFile = new File(new WordTextFileSaver());
 wordFile.save('path', 'there')
}