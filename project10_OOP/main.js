import inquirer from "inquirer";
class Entry {
    date;
    content;
    constructor(date, content) {
        this.date = date;
        this.content = content;
    }
    toString() {
        return `${this.date.toISOString()}: ${this.content}`;
    }
}
class Diary {
    entries = [];
    addEntry(content) {
        const entry = new Entry(new Date(), content);
        this.entries.push(entry);
        console.log('Entry added.');
    }
    listEntries() {
        if (this.entries.length === 0) {
            console.log('No entries found.');
            return;
        }
        this.entries.forEach(entry => {
            console.log(entry.toString());
        });
    }
}
const diary = new Diary();
const mainMenu = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add Entry', 'View Entries', 'Exit'],
        },
    ]);
    switch (answers.action) {
        case 'Add Entry':
            await addEntry();
            break;
        case 'View Entries':
            viewEntries();
            break;
        case 'Exit':
            console.log('Goodbye!');
            return;
    }
    await mainMenu();
};
const addEntry = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'content',
            message: 'Enter your diary entry:',
        },
    ]);
    diary.addEntry(answers.content);
};
const viewEntries = () => {
    diary.listEntries();
};
mainMenu();
