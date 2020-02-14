export interface Todo {

   /** id: identifiant unique */
   id?: number;
   /** title: titre du Todo */
   title: string;
   /** description : contenu du Todo */
   description: string;
   /** active : booléen gérant le statut */
   active: boolean;

}
