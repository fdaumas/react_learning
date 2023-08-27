import { ReactNode } from "react";


type Props = {
	field: ReactNode;
}

function Form({ field }: Props) {
	
  return (
    <div>
		{field}
    </div>
  )
}

export default Form;
