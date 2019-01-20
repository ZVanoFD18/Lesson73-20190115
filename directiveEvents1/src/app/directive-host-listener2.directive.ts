import {Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[directiveHostListener2]',
    host : {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()'
    }
})
export class DirectiveHostListener2 implements OnInit{

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        console.log('directiveHostListener2/constructor');
        renderer.setStyle(elRef.nativeElement, "color" , 'red');
    }
    ngOnInit(): void {
        console.log('directiveHostListener2/ngOnInit');
        // this.renderer.setStyle(this.elRef.nativeElement, "color" , 'red');
    }
    private onMouseEnter(){
        console.log('DirectiveHostListener2/onMouseEnter');
        this.setColor('green');
    }
    private onMouseLeave(){
        console.log('DirectiveHostListener2/onMouseLeave');
        this.setColor('blue');
    }
    protected  setColor(newColor){
        console.log('directiveHostListener2/setColor', newColor);
        this.renderer.setStyle(this.elRef.nativeElement, "color" , newColor);
    }
}