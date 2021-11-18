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
@Pipe({
    name : 'salutation'
})
export class NameBasedOnGender implements PipeTransform {
    transform(value: string, genderValue : string) : string {
        if(genderValue.toUpperCase() == 'MALE')
            return "Mr. "+value;
        return "Ms. "+value;
    }
}
 