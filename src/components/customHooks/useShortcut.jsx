import {useState,useEffect} from 'react'



function useShortcut() {
    const [shortcuts, setShortcuts] = useState([]);
    const [shortcutId, setShortcutId] = useState(0);
    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
    useEffect(() => {
        const dataInStorage = localStorage.getItem("shortcuts");
        if (dataInStorage) {
            const parsed = JSON.parse(dataInStorage);
            setShortcuts(parsed);
            setShortcutId(parsed.length);
        }
    }, []);

    const addShortcut = (data) => {
        const newId = shortcutId + 1;
        const newShortcut = { ...data, id: newId };
        const updated = [...shortcuts, newShortcut];
        setShortcuts(updated);
        localStorage.setItem("shortcuts", JSON.stringify(updated));
        setShortcutId(newId);
    };
    const updateShortcut = (id,data) => {

        const newShortcut = { ...data, id: id };
        let temparr = [...shortcuts];
        temparr[id-1] = newShortcut;
        const updated = temparr;
        setShortcuts(updated);
        localStorage.setItem("shortcuts", JSON.stringify(updated));

    };
    const deleteShortcut = (id) => {

        let temparr = [...shortcuts];
        for(let i=0;i<temparr.length;i++){
            if(temparr[i].id === id){
                temparr.remove(i);

            }
        }
        const updated = temparr;
        setShortcuts(updated);
        localStorage.setItem("shortcuts", JSON.stringify(updated));
        setShortcutId(shortcutId-1);

    };

    return [shortcuts, addShortcut,updateShortcut,deleteShortcut];
}

export default useShortcut;