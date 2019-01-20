import {Directive, ElementRef, OnInit, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[directiveHostListener3]',
    host : {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()'
    }
})
export class DirectiveHostListener3 implements OnInit{
    @Input() colorStart = 'black';
    @Input() colorActive = 'black';
    @Input() colorNoActive = 'black';

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        console.log('directiveHostListener3/constructor');
        //renderer.setStyle(elRef.nativeElement, "color" , 'red');
    }
    ngOnInit(): void {
        console.log('directiveHostListener3/ngOnInit');
        this.renderer.setStyle(this.elRef.nativeElement, "color" , this.colorStart);
    }
    private onMouseEnter(){
        console.log('directiveHostListener3/onMouseEnter');
        this.setColor(this.colorActive);
    }
    private onMouseLeave(){
        console.log('directiveHostListener3/onMouseLeave');
        this.setColor(this.colorNoActive);
    }
    protected  setColor(newColor){
        console.log('directiveHostListener3/setColor', newColor);
        this.renderer.setStyle(this.elRef.nativeElement, "color" , newColor);
    }
}