import TextAnswer from './TextAnswer';
import TextAreaAnswer from './TextAreaAnswer';
import CheckboxAnswer from './CheckBoxAnswer';
import RadioAnswer from './RadioAnswer';

const answerTypes = {
    text: TextAnswer,
    textArea: TextAreaAnswer,
    radio: RadioAnswer,
    checkBox: CheckboxAnswer, 
};

const getComponent = (type) => answerTypes[type];

export default getComponent;
