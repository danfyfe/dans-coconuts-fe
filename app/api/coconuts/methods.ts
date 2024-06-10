import { ICoconut } from "@/models/coconuts/Coconut";

export async function getCoconuts(useId: string) {

};

export async function createCoconutDB(coconut: ICoconut){
  const payload = {
    ...coconut
  }

  const body = JSON.stringify({
    ...payload
  });

  return await fetch('/api/coconuts', {
    method: 'POST',
    body
  });
};
