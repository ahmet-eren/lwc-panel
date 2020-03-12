import { LightningElement, api } from 'lwc';

export default class Panel extends LightningElement {
    @api title = '';
    @api position = 'left';
    @api size = 'medium';
    @api open = false;
    @api customHeader = false;
    @api hideHeader = false;
    @api fullHeight = false;

    get panelClass(){
        return `slds-panel slds-size_${this.size} slds-panel_docked ${this.position === 'left' ? ' slds-panel_docked-left ' : ' slds-panel_docked-right '} ${this.open ? ' slds-is-open ' : ''} ${this.fullHeight ? ' full-height ' : ''}` ;
    }
    get displayHeader(){
        return !this.hideHeader && !this.customHeader;
    }
    handleCloseClick(){
        this.dispatchEvent(new CustomEvent('close'));
    }
}
