import {Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[directiveHostListener1]'
})
export class DirectiveHostListener1 implements OnInit{

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        console.log('DirectiveHostListener1/constructor');
        renderer.setStyle(elRef.nativeElement, "color" , 'red');
    }
    ngOnInit(): void {
        console.log('DirectiveHostListener1/ngOnInit');
        // this.renderer.setStyle(this.elRef.nativeElement, "color" , 'red');
    }
    @HostListener('mouseenter') onMouseEnter (){
        console.log('DirectiveHostListener1/mouseenter');
        this.setColor('green');
    }

    /**
     * mouseleave, вариант 1.
     */
    @HostListener("mouseleave") onMouseLeave (){
        this.setColor('blue');
    }

    /**
     * mouseleave, вариант 2.
     * Валится с исключением в консоли после установки цвета
     * AppComponent.html:8 ERROR TypeError: jit_nodeValue_4(...).onMouseLeave(...) is not a function
     * PS: с приучиной не разобрался. Надеюсь, преподаватель объяснит.
     */
    // @HostListener('mouseleave') 'onMouseLeave()';
    // private onMouseLeave(){
    //     console.log('DirectiveHostListener1/onMouseLeave');
    //     this.setColor('blue');
    // }

    protected  setColor(newColor){
        console.log('DirectiveHostListener1/setColor', newColor);
        this.renderer.setStyle(this.elRef.nativeElement, "color" , newColor);
    }
}