import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useEffect, useState, type FormEvent } from "react";

import { db } from "../../services/firebaseConnection";
import { setDoc, getDoc, doc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook || "");
          setInstagram(snapshot.data()?.instagram || "");
          setYoutube(snapshot.data()?.youtube || "");
        }
      });
    }
    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        alert("Links salvos com sucesso!");
      })
      .catch((error) => {
        alert("Erro ao salvar os links: " + error.message);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-2xl font-medium mt-8 mb-4 text-white">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do facebook
        </label>
        <Input
          type="url"
          value={facebook}
          placeholder="Digite a URL do Facebook"
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do instagram
        </label>
        <Input
          type="url"
          value={instagram}
          placeholder="Digite a URL do Instagram"
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do youtube
        </label>
        <Input
          type="url"
          value={youtube}
          placeholder="Digite a URL do Youtube"
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium mt-4 hover:bg-blue-700 transition-colors"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}
