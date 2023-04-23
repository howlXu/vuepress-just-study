# JAVA基础

## String，StringBuffer，StringBuilder的区别?<br/>
String是不可变的，线程安全的字符串类<br/>
StringBuffer与StringBuilder都是可变字符串类，区别在于StringBuffer使用了synchronized同步关键词做同步，因此，它是线程安全的，反之StringBuilder未使用synchronized同步关键词做同步，因此它是非线程安全的，一般推荐使用String以及StringBuilder，不推荐使用StringBuffer的原因在于JDK7之前synchronized关键词对应的底层jvm实现是通过重量级锁来实现的，性能较差，jdk7之后按理来说也可以用StringBuilder了

## 在for-each循环中对String进行拼接必须使用StringBuilder吗?
JDK7以后的String的+操作已经通过了StringBuilder编译，因此执行速度也很快，不用再必须使用StringBuilder或者StringBuffer了

## java异常分类
![01_java异常分类](/vuepress-just-study/images/java/base/01.png)<br/>

* java中所有异常均继承自Throwable，Throwable有两个实现，分别是Error以及Exception。<br/>
* Error代表系统级别异常(JVM级别/操作系统级别异常，应用本身无法处理，也无需处理)。<br/>
* Exception异常则分为编译时异常(受检异常CheckedException)，以及运行时异常UncheckedException(RuntimeException及其子类)，其中RuntimeException可以捕获后处理，也可以不捕获，编译器不会给任何提示，更不会导致编译失败。编译时异常则不同，如果未在编译时对这类异常做处理(捕获/在方法定义中使用throws关键词抛出)的话，编译会报错（提示你需要关注这类异常，并且对他们做处理）。

## 反射的使用场景
反射功能是一个重量级的功能(性能上会有一些影响)，因此一般不推荐在非框架的场景下使用，除非你只能通过反射来实现功能。实际的项目经验中，我尝试过使用反射获取框架封装好的对象，因为对象中属性定义为私有，且未提供get方法用于访问，无奈之下只能通过反射强制获取到属性，并且对属性做处理。
反射在框架中的使用有JDBC，动态代理等场景。
