import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'mb'
})
export class FileSizeMb implements PipeTransform {
    transform(value: number, ...op : string[]): string {
        console.log(op);
        return value + " MB";
    }
}
@Pipe({
  name : 'kb'  
})
export class FileSizeKb implements PipeTransform {
    transform(value : number) : string {
        let kiloByte = value * 1024;
        return kiloByte+" KB";
    }
}
 