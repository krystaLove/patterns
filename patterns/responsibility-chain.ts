namespace ResponsibilityChain{
    
    interface IHandler{
        setNext(next: IHandler) : IHandler;
        handle(req: string) : string;
    }

    export abstract class BaseHandler implements IHandler{
        private next: IHandler;
        
        public setNext(h: IHandler): IHandler{
            this.next = h;
            return h
        }

        public handle(req: string): string{
            if(this.next){
                return this.next.handle(req)
            }

            return null
        }
    }

    export class BoxerHandler extends BaseHandler{
        public handle(req: string): string{
            if(req === "box"){
                return "Boxer will train!"
            }

            return super.handle(req)
        }
    }

    export class ArmwrestlingHandler extends BaseHandler{
        public handle(req: string): string{
            if(req === "armwrestle"){
                return "Armwrestle will train!"
            }

            return super.handle(req)
        }
    }

    export class RunnerHandler extends BaseHandler{
        public handle(req: string): string{
            if(req === "run"){
                return "Runner will train!"
            }

            return super.handle(req)
        }
    }
}

const sportActivities = ['armwrestle', 'run', 'box']

let runner = new ResponsibilityChain.RunnerHandler()
let boxer = new ResponsibilityChain.BoxerHandler()
let armwrestler = new ResponsibilityChain.ArmwrestlingHandler()

runner.setNext(boxer).setNext(armwrestler)

sportActivities.forEach(sportActivity => {
    console.log(runner.handle(sportActivity))
});