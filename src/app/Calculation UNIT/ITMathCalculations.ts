import { stringify } from "querystring";

export class ITmathCalculations{
    public static lcm(ac:number, bc:number){

        
        let la = ac;
        let lb = bc;
        
        let answer = ac%bc;
       
        while(answer != 0){
          ac =bc;
          bc= answer;
          answer = ac%bc;
        }
        let gcd = bc;
    
        return (la*lb)/gcd;
    }

    public static gcd(ac:number, bc:number){
        let answer = ac%bc;
        while(answer != 0){
        ac =bc;
        bc= answer;
        answer = ac%bc;
        }
        return bc;
    }

    public static mod(ac:number, bc:number){
        let n = 0
        
        n = ac+bc;
    
        while(ac <0){
          ac = bc+ac;
        }
        n =ac % bc;

        return n;
    }

    public static group(ng:number, group:string):any{
        //console.log('HERE Yo ' + ng)
        var groupElements:any[] = []
        if(group === "UN"){
            for (let u = 1; u < ng; u++) {
                if(this.gcd(ng, u) == 1){
                    groupElements.push(u)
                }
            }
            
        }else if(group ==="ZN"){
            for (let z = 0; z < ng; z++) {
                groupElements.push(z)    
            }
        }else{
            return "Something went wrong"
        }
        console.log(groupElements)
        
        return groupElements;
    }

    public static subgroup(ng:number, el:number, group:string):any{
        var groupElements = this.group(ng, group);
        var subGroupElements = []
        if(groupElements != "Something went wrong"){
            if(this.checkContains(el, groupElements)){
                if(group === "UN"){
                   let i:number = 1
                   let ans:number = 0
                   while (ans !=1) {
                       let power = Math.pow(el, i)
                       ans = this.mod(power, ng)
                       
                       subGroupElements.push(ans)
                       i++
                       if(groupElements.length == subGroupElements.length){
                           ans = 1
                       }
                   }
                }else if(group === "ZN"){
                    let i:number = 1
                    let ans:number = 1
                    let add:number = 0

                    while(ans != 0){
                        add = i * el
                        ans = this.mod(add, ng)
                        subGroupElements.push(ans)
                        i++
                        add = 0

                    }
                }
            }else{
                return "The entry you have entered is not part of the group"
            }
        }else{
            return groupElements
        }

        //generator?
        var generator:boolean = false
        if(groupElements.length == subGroupElements.length){
            generator = true
        }
        return subGroupElements
    }

    private static checkContains(el:number, arr:[]):boolean{
        let contains:boolean = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] == el){
                contains =true;
                break;
            }
            
        }
        return contains;
    }

    private static checkCyclic(ng:number, group:string, groupElements:any[]):any{
        
        var groupGenerators:any[] = []
        var cyclic:boolean = false

        groupElements.forEach(c => {
            var subElements = this.subgroup(ng,c,group)
            if(subElements.length == groupElements.length){
                cyclic = true
                groupGenerators.push(c)
            }           
        });

        return {
            Cyclic:cyclic,
            Generators:groupGenerators
        }
    }

    private static inverse(subG:any[], el:number):number{
        var inv:number = 0
        subG.forEach(s =>{
            var prd = s*el
            if(this.mod(prd, subG.length) == 1){
                inv = s
            }
        })
        return inv;
    }

    public static groupInfo(ng:number, group:string):string{
        let groupInfo:string = ""
        if(group == "UN"){
            groupInfo = "About the U (" +ng + ") group"
            let groupElements = this.group(ng,group)
            
            let cyclicI = this.checkCyclic(ng, group, groupElements)
            groupInfo += "\n\n This group is abelian "
            if(cyclicI.Cyclic){
                groupInfo += "\n\n This group is cyclic"
                groupInfo += "\n This group is generated by:\n" +cyclicI.Generators
            }else{
                groupInfo += "\n\n This group is not cyclic"
            }
            groupInfo += "\n\n This group has order of: "+groupElements.length
        }else{
            groupInfo = "About the Z (" +ng + ") group"

            let groupElements = this.group(ng,group)
            
            let cyclicI = this.checkCyclic(ng, group, groupElements)
            groupInfo += "\n\n This group is abelian "
            if(cyclicI.Cyclic){
                groupInfo += "\n\n This group is cyclic"
                groupInfo += "\n This group is generated by:\n" +cyclicI.Generators
            }else{
                groupInfo += "\n\n This group is not cyclic"
            }
            groupInfo += "\n\n This group has order of: "+groupElements.length

        }
        
        return groupInfo;
        
    }

    public static subGroupInfo(ng:number, el:number, group:string){
        let subgroupInfo:string = "About the < "+ el + " > subgroup:"
        
        let subGElements = this.subgroup(ng,el,group)
        let GElements = this.group(ng, group)

        subgroupInfo += "\n\nThe subgroup has order " +subGElements.length
        if(subGElements.length == GElements.length){
            subgroupInfo += "\n\nThe element " + el + " is the group generator"
        }else{
            subgroupInfo += "\n\nThe element " + el + " generates a proper subgroup"
        }
        //subgroupInfo += "\nThe element " + el + " inverse is " + this.inverse(subGElements, el)

        return subgroupInfo;
    }
}